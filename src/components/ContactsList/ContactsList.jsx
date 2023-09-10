import { Table, TableBody, TableCell, TableHead } from './ContactsList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';
import { FaTrashAlt } from 'react-icons/fa';

const ContactsList = () => {
  return (
    <Table>
      <TableHead>
        <TableCell>Name</TableCell>
        <TableCell>Number</TableCell>
        <TableCell>
          <FaTrashAlt />
        </TableCell>
      </TableHead>
      <TableBody>
        <ContactListItem />
      </TableBody>
    </Table>
  );
};

export default ContactsList;
