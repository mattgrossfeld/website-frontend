import { Badge, ScrollArea, Table } from '@mantine/core';

interface Role {
  roleName: string;
  roleDescription: string;
  roleLevel: number;
  isAdmin: boolean;
  roleCreatedTm: string;
  roleUpdatedTm: string;
  roleCreatedBy: string;
  roleModifiedBy: string;
}

interface RolesTableProps {
  roles: Role[];
}

export function RolesTable({ roles }: RolesTableProps) {
  return (
    <ScrollArea>
      <Table highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Role Name</Table.Th>
            <Table.Th>Role Description</Table.Th>
            <Table.Th>Role Level</Table.Th>
            <Table.Th>Is Admin</Table.Th>
            <Table.Th>Role Created Time</Table.Th>
            <Table.Th>Role Updated Time</Table.Th>
            <Table.Th>Role Created By</Table.Th>
            <Table.Th>Role Modified By</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {roles.map((role, index) => (
            <Table.Tr key={index}>
              <Table.Td>{role.roleName}</Table.Td>
              <Table.Td>{role.roleDescription}</Table.Td>
              <Table.Td>{role.roleLevel}</Table.Td>
              <Table.Td>
                <Badge color={role.isAdmin ? 'green.4' : 'gray.4'} fullWidth variant="light">
                  {role.isAdmin ? 'True' : 'False'}
                </Badge>
              </Table.Td>
              <Table.Td>{new Date(role.roleCreatedTm).toLocaleString()}</Table.Td>
              <Table.Td>{new Date(role.roleUpdatedTm).toLocaleString()}</Table.Td>
              <Table.Td>{role.roleCreatedBy}</Table.Td>
              <Table.Td>{role.roleModifiedBy}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
