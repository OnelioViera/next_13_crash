import { Suspense } from 'react'
import Link from 'next/link'
import Repo from '@app/components/Repo'
import RepoDirs from '@app/components/RepoDirs'

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className='btn btn-back'>
        Back to Repositories
      </Link>
      <Suspense fallback={<h2>Loading repo...</h2>}>
      <Repo name={name} />
      </Suspense>
      <Suspense fallback={<h3>Loading Directories...</h3>}>
      <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage
