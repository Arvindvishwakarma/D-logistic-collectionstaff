/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';


export const QUERY_GET_COLLECTION_BY_ID = gql`
query Query($collectionBoyId: ID) {
  getCollectionBoyId(collectionBoyId: $collectionBoyId) {
    id
    uniqueId
    fName
    lName
    userName
    email
    phone
    address
    collectionStaffRole
    password
    createdDateTime
    status
    type
  }
}
`

export const QUERY_GET_BOOKING_COLLECTION_BY_ID = gql`
query GetBookingByCollectionBoyId($collectionBoyId: ID) {
  getBookingByCollectionBoyId(collectionBoyId: $collectionBoyId) {
    id
    bookingUniqueId
    bookDateAndTime
    pickUpDate
    pickUpTime
    notes
    area
    allocation
    customerId
    collectionBoyId
    collectionName
    collectionBoyuniqueId
    createDateAndTime
    status
  }
}
`

export const QUERY_GET_ALL_INVOICE = gql`
query Query {
  getAllInvoice {
    id
    invoiceNumber
    customerId
    customerUniqueId
    containerId
    containerUniqueId
    recipientName
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addressTwo
    postCode
    totalCost
    bookingNo
    collectionBoyId
    collectionBoyName
    collectionBoyFreetownId
    collectionBoyFreetownName
    collectionBoyFreetownUniqueId
    imgQR
    imgSignature
    area
    createdDateTime
    status
    items {
      id
      itemId
      itemType
      itemDescription
      length
      height
      weight
      quantity
      costPerItem
      ItemDeliveredDateAndTime
      ItemStatus
      containerNo
    }
  }
}
`

export const QUERY_GET_INVOICE_BY_ID = gql`
query Query($invoiceId: ID) {
  getInvoiceById(invoiceId: $invoiceId) {
    id
    invoiceNumber
    customerId
    customerUniqueId
    containerId
    containerUniqueId
    recipientName
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addressTwo
    postCode
    totalCost
    bookingNo
    collectionBoyId
    collectionBoyName
    collectionBoyFreetownId
    collectionBoyFreetownName
    collectionBoyFreetownUniqueId
    imgQR
    area
    imgSignature
    warehousePickupDateAndTime
    freetownPickUpDateAndTime
    containerPickUpDateAndTime
    collectionBoyPickUpDateAndTime
    onWayDateAndTime
    deliveredDateAndTime
    createdDateTime
    status
    items {
      id
      itemId
      itemType
      itemDescription
      length
      height
      weight
      quantity
      costPerItem
      ItemDeliveredDateAndTime
      ItemStatus
      containerNo
    }
  }
}
`

export const QUERY_GET_INVIOCE_FREETOWN_ON_WAY = gql`
query GetBookingByCollectionBoyId($collectionBoyFreetownId: ID) {
  getInvoiceByCollectionBoyFreetownIdonWay(collectionBoyFreetownId: $collectionBoyFreetownId) {
    id
    invoiceNumber
    customerId
    customerUniqueId
    containerId
    containerUniqueId
    recipientName
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addressTwo
    postCode
    totalCost
    bookingNo
    collectionBoyId
    collectionBoyName
    collectionBoyFreetownId
    collectionBoyFreetownName
    collectionBoyFreetownUniqueId
    imgQR
    area
    imgSignature
    warehousePickupDateAndTime
    freetownPickUpDateAndTime
    containerPickUpDateAndTime
    collectionBoyPickUpDateAndTime
    onWayDateAndTime
    deliveredDateAndTime
    createdDateTime
    status
    items {
      id
      itemId
      itemType
      itemDescription
      length
      height
      weight
      quantity
      costPerItem
      ItemDeliveredDateAndTime
      ItemStatus
      containerNo
    }
  }
}
`

export const QUERY_GET_INVOICE_FREETOWN_DELIVERED = gql`
query Query($collectionBoyFreetownId: ID) {
  getInvoiceByCollectionBoyFreetownIdonDelivered(collectionBoyFreetownId: $collectionBoyFreetownId) {
    id
    invoiceNumber
    customerId
    customerUniqueId
    containerId
    containerUniqueId
    recipientName
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addressTwo
    postCode
    totalCost
    bookingNo
    collectionBoyId
    collectionBoyName
    collectionBoyFreetownId
    collectionBoyFreetownName
    collectionBoyFreetownUniqueId
    imgQR
    area
    imgSignature
    warehousePickupDateAndTime
    freetownPickUpDateAndTime
    containerPickUpDateAndTime
    collectionBoyPickUpDateAndTime
    deliveredDateAndTime
    createdDateTime
    status
    onWayDateAndTime
    items {
      id
      itemId
      itemType
      itemDescription
      length
      height
      weight
      quantity
      costPerItem
      ItemDeliveredDateAndTime
      ItemStatus
      containerNo
    }
  }
}
`

export const QUERY_ALL_DELIVERED_INVOICE = gql`
query GetInvoiceDelivered {
  getInvoiceDelivered {
    id
    invoiceNumber
    customerId
    customerUniqueId
    containerId
    containerUniqueId
    recipientName
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addressTwo
    postCode
    totalCost
    bookingNo
    collectionBoyId
    collectionBoyName
    collectionBoyFreetownId
    collectionBoyFreetownName
    collectionBoyFreetownUniqueId
    imgQR
    imgSignature
    createdDateTime
    status
    items {
      id
      itemId
      itemType
      itemDescription
      length
      height
      weight
      quantity
      costPerItem
    }
  }
}
`

export const QUERY_ALL_CUSTOMER = gql`
query GetAllCustomer {
  getAllCustomer {
    id
    customerUniqueId
    fName
    lName
    company
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addresstwo
    postCode
    webPage
    notes
    area
    createdDateTime
    status
  }
}
`

export const GET_INVOICE_BY_INVOICE_NUMBER = gql`
query GetInvoiceByInvoiceNo($invoiceId: String) {
  getInvoiceByInvoiceNo(invoiceId: $invoiceId) {
    id
 
  }
}
`

export const GET_AREA = gql`
query Query {
  getAllArea {
    id
    areaName
    areaAddress
 
    areaLongitude
    areaLatitude
    createdDateTime
    status
  }
}
`

export const GET_PAYMENT_STATUS =gql`
query Query {
  getPaymentStatus {
    id
    invoiceNumber
    customerId
    customerUniqueId
    containerId
    containerUniqueId
    recipientName
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addressTwo
    postCode
    totalCost
    bookingNo
    bookingId
    collectionBoyId
    collectionBoyName
    collectionBoyFreetownId
    collectionBoyFreetownName
    collectionBoyFreetownUniqueId
    imgQR
    imgSignature
    warehousePickupDateAndTime
    freetownPickUpDateAndTime
    containerPickUpDateAndTime
    collectionBoyPickUpDateAndTime
    onWayDateAndTime
    deliveredDateAndTime
    feedbackStatus
    feedbackMessage
    area
    createdDateTime
    paymentType
    paymentStatus
    paymentId
    paymentAmount
    paymentOther
    status
    items {
      id
      itemId
      itemType
      itemDescription
      length
      height
      weight
      quantity
      costPerItem
      ItemDeliveredDateAndTime
      ItemStatus
      containerNo
    }
  }
}
`

export const GET_PAYMENT_COLLECTION_BOY = gql`
query Query($collectionBoyFreetownId: ID) {
  getPaymentCollectionBoyId(collectionBoyFreetownId: $collectionBoyFreetownId) {
    id
    invoiceNumber
    customerId
    customerUniqueId
    containerId
    containerUniqueId
    recipientName
    email
    phoneOne
    phoneTwo
    phoneThree
    addressOne
    addressTwo
    postCode
    totalCost
    bookingNo
    bookingId
    collectionBoyId
    collectionBoyName
    collectionBoyFreetownId
    collectionBoyFreetownName
    collectionBoyFreetownUniqueId
    imgQR
    imgSignature
    warehousePickupDateAndTime
    freetownPickUpDateAndTime
    containerPickUpDateAndTime
    collectionBoyPickUpDateAndTime
    onWayDateAndTime
    deliveredDateAndTime
    feedbackStatus
    feedbackMessage
    area
    createdDateTime
    paymentType
    paymentStatus
    paymentId
    paymentAmount
    paymentOther
    status
    items {
      id
      itemId
      itemType
      itemDescription
      length
      height
      weight
      quantity
      costPerItem
      ItemDeliveredDateAndTime
      ItemStatus
      containerNo
    }
  }
}
`