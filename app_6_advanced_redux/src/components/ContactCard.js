import useStyles from "../styles/contactForm";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
//logical imports
import { useDispatch } from "react-redux";
import { deleteContact } from "../actions/contactActions";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <Container maxWidth="sm" className={classes.card}>
        <List>
          <ListItem className={classes.list}>
            <Container maxWidth="lg">
              <ListItemText
                primary={contact.name}
                secondary={contact.desc ? contact.desc : "No description given"}
              ></ListItemText>
              <ListItemText
                primary={contact.email ? contact.email : "-"}
              ></ListItemText>
              <ListItemText primary={contact.mobileNum}></ListItemText>
            </Container>
            <ListItemSecondaryAction>
              <Link to={`/edit/${contact.id}`}>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Link>
              <IconButton onClick={() => deleteHandler(contact.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Container>
    </div>
  );
};

export default ContactCard;
