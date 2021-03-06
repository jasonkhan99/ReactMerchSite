import React from 'react';
import PropTypes from 'prop-types';

function EditMerchForm(props) {

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerchSubmission({
      name: event.target.name.value,
      description: event.target.description.value,
      imageURL: event.target.imageURL.value,
      cost: event.target.cost.value,
      quantity: event.target.quantity.value
    });
  }

  return(
    <React.Fragment>
      <form onSubmit = {handleEditMerchFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder={props.merch.name} 
          />
        <textarea
          name='description'
          placeholder={props.merch.description} 
          />
        <input
          type='text'
          name='imageURL'
          placeholder={props.merch.imageURL} 
          />
        <input
          type='number'
          name='cost'
          placeholder={props.merch.cost} 
          />
        <input
          type='number'
          name='quantity'
          placeholder={props.merch.quantity} 
          />
        <button type="submit">Add Merch!</button>
      </form>
    </React.Fragment>
  );
}

EditMerchForm.propTypes = {
  onEditMerchCreation: PropTypes.func,

  name: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string,
  cost: PropTypes.number,
  quantity: PropTypes.number,
};

export default EditMerchForm;

