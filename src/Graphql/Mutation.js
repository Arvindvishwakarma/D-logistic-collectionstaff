import { gql } from '@apollo/client';

export const MUTATION_COLLECTION_STAFF_BOY_LOGIN = gql`
mutation Mutation($userName: String, $password: String) {
    collectionLogin(userName: $userName, password: $password) {
      collectionId
      collectionToken
    }
  }
`

export const MUTATION_ADD_INVOICE = gql`
mutation Mutation($invoiceInput: invoiceInput) {
  createInvoice(InvoiceInput: $invoiceInput) {
    id
  
  }
}
` 

export const MUTATION_UPDATE_BOOKING = gql`
mutation Mutation($editBookingInput: editBookingInput) {
  editBooking(EditBookingInput: $editBookingInput) {
    id
    
  }
}
`
export const MUTATION_EDIT_INVOICE = gql`
mutation EditInvoice($editInvoiceInput: editInvoiceInput) {
  editInvoice(EditInvoiceInput: $editInvoiceInput) {
    id
   
    
  }
}

`

export const MUTATION_INVOICE_DELIVERED = gql`
mutation Mutation($invoiceId: ID, $itemStatus: String, $itemDeliveredDateAndTime: String, $itemId: ID) {
  invoiceItemIntoDelivered(invoiceId: $invoiceId, ItemStatus: $itemStatus, ItemDeliveredDateAndTime: $itemDeliveredDateAndTime, itemId: $itemId) {
    id
   
   
  }
}

`

export const MUTATION_EMAIL = gql`
mutation Mutation($email: String, $subject: String, $text: String, $userName: String, $img: String, $logo: String, $htmlContext: String) {
  createMail(email: $email, subject: $subject, text: $text, userName: $userName, Img: $img, logo: $logo, htmlContext: $htmlContext)
}
`

export const MUTATION_INVOICE_EDIT = gql`
mutation Mutation($editInvoiceInput: editInvoiceInput) {
  editInvoice(EditInvoiceInput: $editInvoiceInput) {
 id
  }
}
`