'use client';

import { useParams } from 'next/navigation';
import CompanyDetails from '../../../../src/Components/esg_dashboard/CompanyDetails';

export default function CompanyDetailsPage() {
  const params = useParams();
  
  return <CompanyDetails companyID={params.companyID} />;
}
