import { Table, Text } from '@mantine/core'
import { useNetwork } from '@mantine/hooks'

const NetworkStatus = () => {
  const networkStatus = useNetwork()

  return (
    <>
      <Table sx={{ maxWidth: 300, tableLayout: 'fixed' }} mx="auto">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Online</td>
            <td>
              <Text size="sm" color={networkStatus.online ? 'teal' : 'red'}>
                {networkStatus.online ? 'Online' : 'Offline'}
              </Text>
            </td>
          </tr>

          <tr>
            <td>rtt</td>
            <td>{networkStatus.rtt}</td>
          </tr>

          <tr>
            <td>downlink</td>
            <td>{networkStatus.downlink}</td>
          </tr>

          <tr>
            <td>effectiveType</td>
            <td>{networkStatus.effectiveType}</td>
          </tr>

          <tr>
            <td>saveData</td>
            <td>
              <Text size="sm" color={networkStatus.saveData ? 'teal' : 'red'}>
                {networkStatus.saveData ? 'true' : 'false'}
              </Text>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default NetworkStatus
