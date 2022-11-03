import {Pagination} from 'react-bootstrap';
import { memo } from 'react';

function BoardPagination({active, items}){
    console.log("보드페이지네이션 렌더링")
   /* for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }*/

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination className=''>
          <Pagination.First />
          <Pagination.Prev />

            <Pagination.Item>{1}</Pagination.Item>

          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        </div>
      );
}

export default memo(BoardPagination);