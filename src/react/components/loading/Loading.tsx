import LoadingIcon from '@components/icons/LoadingIcon'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[30vh]">
      <LoadingIcon />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
