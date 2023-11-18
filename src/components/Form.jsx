export default function Form({userInput, onChange}) {

   return(
    <section className="mb-10 ">
    <form className="grid grid-cols-2 ">
        <div className="px-2 lg:px-10">
          <label className="label">
            <span className="label-text">INITIAL INVESTMENT</span>
          </label>
          <input 
            className="w-full input input-bordered" 
            type="number"  
            required 
            value={userInput.initialInvestment} 
            onChange={(event) => onChange('initialInvestment', event.target.value)} 
          />
        </div>
         
        <div className="px-2 lg:px-10">
         <label className="label">
            <span className="label-text">ANNUAL INVESTMENT</span>
          </label>
          <input 
            className="w-full input input-bordered" 
            type="number" 
            required 
            value={userInput.annualInvestment} 
            onChange={(event) => onChange('annualInvestment', event.target.value)} 
          />
        </div>

        <div className="px-2 lg:px-10">
         <label className="label">
            <span className="label-text">EXPECTED RETURN</span>
          </label>
          <input
            className="w-full input input-bordered" 
            type="number" 
            required 
            value={userInput.expectedReturn} 
            onChange={(event) => onChange('expectedReturn', event.target.value)} 
          />
          </div>

          <div className="px-2 lg:px-10">
          <label className="label">
            <span className="label-text">DURATION</span>
          </label>
          <input 
           className="w-full input input-bordered" 
            type="number" 
            required 
            value={userInput.duration} 
            onChange={(event) => onChange('duration', event.target.value)} 
          />
          </div>
    </form>
    </section>
   )
}