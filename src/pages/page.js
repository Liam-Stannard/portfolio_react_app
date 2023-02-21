import '../css/page.css'

const Page = (props) => {
    return (
      <div className='page-container'>
      <main className='page-main'>
        <div className="page-margin"></div>
        <div className='page-content'>{props.content}</div>
        <div className="page-margin"></div>
      </main>
      <footer className="page-footer">I am a simple footer</footer>
      </div>
    )
  };
  
  export default Page;