import request from './request'

export function getReceiptList () {
  return request({
    url: '/receipt',
    method: 'GET'
  })
}

/**
 * Create a receipt
 * @param {Object} data - Receipt data
 */
export function createReceipt (data) {
  return request({
    url: '/receipt',
    method: 'POST',
    data
  })
}

/**
 * Edit a receipt
 * @param {Object} data - Receipt data
 */
export function editReceiptById (id, data) {
  return request({
    url: `/receipt/${id}`,
    method: 'PUT',
    data
  })
}

/**
 * Delete one receipt
 * @param {Number} id - Receipt ID
 */
export function deleteReceiptById (id) {
  return request({
    url: `/receipt/${id}`,
    method: 'DELETE'
  })
}
