function Step2(){
   
    
    return(
        <>
             <form>
          
          <div className='card'>
      
          
              <div className='mb-3'>
                  <label className='form-label'>Designation</label>
                  <input type="text"  name="designation" className='form-control' />
      
              </div>
              <div className='mb-3'>
                  <label className='form-label'>Salary</label>
                  <input type="text"  name="salary" className='form-control' />
      
             
              </div>
              {/* <button className='btn btn-primary' >next</button> */}
              </div>
               
             </form>
        </>
    )
}
export default Step2;