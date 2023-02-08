import '../css/page.css'

const Page = (props) => {
    return (
      <main className='page-main'>
        <div className="page-margin"></div>
        <div className='page-content'>{props.content}</div>
        <div className="page-margin"></div>
      </main>
    )
  };
  
  export default Page;