import { Button } from '../../../shared/ui/button/Button'
import { TableProps } from 'antd'

export const createColumns = (openModal: () => void): TableProps['columns'] => {
  return [
    {
      title: 'First name',
      dataIndex: ['profile', 'first_name'],
      key: 'first_name',
      render: (firstName) => firstName ?? '-',
    },
    {
      title: 'Last name',
      dataIndex: ['profile', 'last_name'],
      key: 'last_name',
      render: (lastName) => lastName ?? '-',
    },
    {
      title: 'Email',
      dataIndex: ['profile', 'personal_email'],
      key: 'personal_email',
    },
    {
      title: 'Phone',
      dataIndex: ['profile', 'personal_phone'],
      key: 'personal_phone',
      render: (phone) => phone ?? '-',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => {
        console.log(record)
        return (
          <Button
            onClick={openModal}
            sx={{ fontSize: '0.875rem', padding: '.1rem .5rem' }}
          >
            Edit
          </Button>
        )
      },
    },
  ]
}
