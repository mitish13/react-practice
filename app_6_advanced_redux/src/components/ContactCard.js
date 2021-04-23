import useStyles from "../styles/contactForm";
import {
  ListItemText,
  CardHeader,
  Card,
  Grid,
  CardContent,
  CardActions,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
//logical imports
import { useDispatch } from "react-redux";
import { deleteContact } from "../actions/contactActions";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <Grid
      item
      lg={2}
      md={3}
      sm={4}
      xs={12}
      style={{ backgroundColor: "black" }}
    >
      <Card style={{ backgroundColor: "lightslategray" }}>
        <CardHeader
          title={contact.name}
          subheader={contact.desc ? contact.desc : "No description given"}
        />
        <CardContent>
          <ListItemText
            primary={contact.email ? contact.email : "-"}
          ></ListItemText>
          <ListItemText primary={contact.mobileNum}></ListItemText>
        </CardContent>
        <CardActions>
          <Link to={`/edit/${contact.id}`}>
            <EditIcon color="action" />
          </Link>

          <DeleteIcon onClick={() => deleteHandler(contact.id)} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ContactCard;
