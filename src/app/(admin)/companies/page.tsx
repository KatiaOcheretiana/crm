import React from 'react';
import Header from '@/app/components/header';
import Toolbar from '../../components/toolbar';
import SearchInput from '../../components/search-input';
import AddCompanyButton from '../../components/add-company-button';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { Status } from '../../components/status-label';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2023"
        />
        {/* <CompanyRow
          id={2}
          category="Products"
          company="АТБ"
          status={Status.Pending}
          promotion={false}
          country="UK"
          joinedDate="02.19.2023"
        /> */}
      </CompanyTable>
    </>
  );
}
