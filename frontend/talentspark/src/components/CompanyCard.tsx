import {getCompanies} from "../Services/CompanyServices";
import { useEffect, useState } from "react";
import type { Company } from "../types/Company";


function CompanyCard() {
  const [companies, setCompanies] = useState<Company[]>([]);
  async function fetchCompanies() {
    const companies = await getCompanies();
    setCompanies(companies);
  }
  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
      <div>
       {companies.map((company) => (
        <div key={company.id}>
          <h1>{company.name}</h1>
          <p>{company.email}</p>
          <p>{company.phone}</p>
          <p>{company.location}</p>
          <hr></hr>
        </div>
      ))}
      </div>
  )
}
export default CompanyCard