import React from 'react'
import PropTypes from 'prop-types'
import { TableContainer, TableElement, Tbody, Thead, Td, Th, Tr, Title, TitleContainer } from './styles'

const Table = ({ content, handleClick, header, keys, title }) => {
  return (
    <TableContainer>
      {title && (
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      )}
      <TableElement>
        <Thead>
          <Tr>
            {header?.map((item, index) => (
              <Th key={index}>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {content?.map((item, id) => (
            <Tr key={id} onClick={handleClick}>
              {keys?.map((key, index) => (
                <Td key={`${id}-${index}`}>{item[key]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TableElement>
    </TableContainer>
  )
}

Table.propTypes = {
  content: PropTypes.array,
  handleClick: PropTypes.func,
  header: PropTypes.array,
  keys: PropTypes.array,
  title: PropTypes.string
}

Table.defaultProps = {
  title: 'Table'
}

export default Table
