import { Modal, Table } from 'antd'
import { meApi } from '../../../shared/api'
import { employeesApi } from '../api/employees-api'
import { useState } from 'react'
import { createColumns } from '../model/createColumns'

export const EmployeesList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data } = meApi.useMeQuery()
  const { data: employees, isLoading } = employeesApi.useGetEmployeesQuery({
    portalId: data?.data.current_portal_id as number,
  })

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const columns = createColumns(openModal)

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Table
        pagination={false}
        columns={columns}
        dataSource={employees?.data}
        rowKey="id"
      />
      <Modal
        title="Profile edit"
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
      >
       Test
      </Modal>
    </>
  )
}
