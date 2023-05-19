import PropTypes from 'prop-types';
import { Wrapper, List, Item, WrapperItem, Delete } from './ContactList.styled';
const ContactList = ({ contacts, onDell }) => {
  return (
    <div>
      {contacts.length > 0 && (
        <Wrapper>
          <List>
            {contacts.map(contact => {
              return (
                <WrapperItem key={contact.id}>
                  <Item>
                    {contact.name}: {contact.number}
                  </Item>
                  <Delete
                    type="button"
                    onClick={() => {
                      onDell(contact.id);
                    }}
                  >
                    Delete
                  </Delete>
                </WrapperItem>
              );
            })}
          </List>
        </Wrapper>
      )}
    </div>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDell: PropTypes.func.isRequired,
};
