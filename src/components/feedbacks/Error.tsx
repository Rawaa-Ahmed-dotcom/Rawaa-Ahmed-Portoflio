import type { PostgrestError } from '@supabase/supabase-js'


const Error = ({error}: {error: PostgrestError}) => {
  return (
    <div className='flex items-center justify-center'>
      <h1 className='text-[var(--color-primary)] !text-4xl text-center'>{error?.message}</h1>
    </div>
  )
}

export default Error
