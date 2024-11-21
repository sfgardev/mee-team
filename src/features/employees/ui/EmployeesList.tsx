import { Modal, Table } from 'antd'
import { meApi } from '../../../shared/api'
import { employeesApi } from '../api/employees-api'
import { useState } from 'react'
import { createColumns } from '../model/createColumns'
import { EmployeeEditForm } from './EmployeeEditForm'
import { EmployeeEditFormFields } from '../model/types'

export const EmployeesList = () => {
  const [employee, setEmployee] = useState<EmployeeEditFormFields | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data } = meApi.useMeQuery()
  const { data: employees, isLoading } = employeesApi.useGetEmployeesQuery({
    portalId: data?.data.current_portal_id as number,
  })

  const openModal = (employee: EmployeeEditFormFields) => {
    setIsModalOpen(true)
    setEmployee(employee)
  }
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
        footer={false}
        title="Profile edit"
        open={isModalOpen}
        onCancel={closeModal}
        destroyOnClose
      >
        <EmployeeEditForm employee={employee} onCancel={closeModal} />
      </Modal>
    </>
  )
}
