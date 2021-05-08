import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { history } from '../redux/configStore';

function SearchInput() {
  // 배너 검색 창
  const [search, setSearch] = useState('');
  const searchHandler = () => {
    // 검색이 공란일때는 리턴
    if (search === '' || search.trim() === '') {
      return;
    }
    history.push(`/find/search?keyword=${search}`);
    setSearch('');
  };
  return (
    <>
      <InputBox>
        <Input
          placeholder='검색어를 입력하세요'
          suffix={
            <SearchOutlined
              style={{
                color: '#7F58EC',
                cursor: 'pointer',
              }}
              onClick={searchHandler}
            />
          }
          value={search}
          style={{
            borderRadius: '29px',
            fontSize: '18px',
            letterSpacing: '-0.54px',
            color: '#C7C7C7',
            boxSizing: 'border-box',
            padding: '6.43px 24px 6.43px 24px',
            boxShadow: '0px 10px 15px #F3E8F6',
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchHandler();
            }
          }}
        />
      </InputBox>
    </>
  );
}

const InputBox = styled.div`
  width: 492px;
  max-width: 492px;
  height: 45px;
  position: absolute;
  top: 367px;
  box-sizing: border-box;
  & .ant-input-affix-wrapper {
    border: 1px solid #7f58ec;
  }
  @media only screen and (max-width: 414px) {
    display: none;
  }
`;

export default SearchInput;
