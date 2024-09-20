export default function FullscreenLoader() {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='spinner-border' role='status'>
        <span aria-hidden="true" className='sr-only visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}
