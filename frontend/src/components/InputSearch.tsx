import { Search } from 'lucide-react';

interface PropsSearch {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputSearch:React.FC<PropsSearch> = ({onChange}) => {
  return (
    <div className='w-fit h-fit flex relative pt-10'>
        <Search className='absolute top-2.5 left-3 w-5 h-5 text-slate-500'/>
        <input type="search" placeholder='Search products...' className='pl-10 py-2 border border-slate-300 absolute top-0 w-96 rounded' onChange={onChange}/>
    </div>
  )
}

export default InputSearch
