import Welcome from './components/welcome';
import NavBar from './components/NavBar';
import CompanyCard from './components/CompanyCard';
import JobCard from './components/JobCard';
import Footer from './components/footer';
import type { Company } from './types/Company';
import {getCompanies} from './Services/CompanyServices';
import { useEffect, useState } from 'react';

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error,seterror] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchCompanies() {
    setLoading(true);
    try {
      const companies = await getCompanies();
      setCompanies(companies);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

  useEffect(() => {
    fetchCompanies();
    
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <>
          <NavBar />
          <Welcome />
          <br />
            <CompanyCard key={companies_id}
            companies={companies}/>
          
          <JobCard />
          <Footer />
      </>
  )
}

export default App