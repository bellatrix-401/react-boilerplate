import styled from 'styled-components'

export const TableContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  color: #525f7f;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  
`

export const TableElement = styled.table`
  background-color: white;
  border-collapse: collapse;
  min-width: 400px;
  text-align: center;
`

export const Tbody = styled.tbody`
`

export const Thead = styled.thead`
`

export const Td = styled.td`
  font-size: .875rem;
  height: 40px;
`

export const Th = styled.th`
  background-color: #f6f9fc;
  border-bottom: 1px solid #e9ecef;
  border-top: 1px solid #e9ecef;font-size: .65rem;
  height: 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const Tr = styled.tr`
  &:hover {
    cursor: pointer;
    background-color: #e4f1ff;
  }
`

export const TitleContainer = styled.div`
  padding: 20px 24px;
`

export const Title = styled.h3`
  margin: 0
`
