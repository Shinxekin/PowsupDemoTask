type Props = {
  customName: string;
  titolo: string;
  list: string[];
  value: string;
  setValue: (value: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function CustomSelect({ customName,titolo,list,value,setValue }: Props) {
  return (
    <div className="flex flex-col gap-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
        <label className='font-medium text-white'>{titolo}</label>
        <select id={customName} name={customName} value={value} onChange={setValue} className={`border border-gray-300 rounded px-3 py-2 bg-white ${value==="" ? 'text-gray-400':'text-black'}`}>
            <option value="" className='text-gray-400'>-</option>
            {list.map(opt => (
                <option key={opt} value={opt.toLowerCase()} className='bg-white text-black'>{opt}</option>
            ))}
        </select>
    </div>
  );
}