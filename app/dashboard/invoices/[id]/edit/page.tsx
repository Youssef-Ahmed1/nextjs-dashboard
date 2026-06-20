import Form from '../../edit-form';
import Breadcrumbs from '../../breadcrumbs';
import {fetchInvoiceById, fetchCustomers } from '../../../../lib/data';
import { notFound } from 'next/navigation';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);


  if (!invoice) {
    notFound();
  }
}
