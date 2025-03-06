import { Avatar, Badge, Group, Select, Table, Text } from '@mantine/core';
import React, { ReactNode } from 'react';

const rolesData = ['Admin', 'Member'];

interface User {
  dateJoined: ReactNode;
  avatar: string;
  name: string;
  role: string;
  lastActive: string;
  active: boolean;
};

interface ContentTableProps {
  data: User[];
};

export const ContentTable: React.FC<ContentTableProps> = ({ data }) => {
  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>
        <Select
          data={rolesData}
          defaultValue={item.role}
          variant="unstyled"
          allowDeselect={false}
        />
      </Table.Td>
      <Table.Td>{item.lastActive}</Table.Td>
      <Table.Td>{item.dateJoined}</Table.Td>
      <Table.Td>
        {item.active ? (
          <Badge color="green.4" fullWidth variant="light">
            Active
          </Badge>
        ) : (
          <Badge color="gray.4" fullWidth variant="light">
            Disabled
          </Badge>
        )}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>User</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Last active</Table.Th>
            <Table.Th>Date Joined</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
