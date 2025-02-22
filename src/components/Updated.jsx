import listIcon from "../../assets/images/icon-list.svg"

export const Updated = () => {
  return (
    <div className="w-96 pl-6 pr-6 pb-6 pt-2">
      <h1 className="text-5xl font-semibold mb-2">Stay updated!</h1>
      <p className="mb-4">Join 60,000+ product managers receiving monthly updates on:</p>
      <section className="flex flex-col justify-between"> 
        <div className="flex gap-4">
          <span><img src={listIcon} alt="icon-check" /></span> 
          <p>Product discoery and building what matters</p>
        </div>
        <div className="flex gap-4">
        <span><img src={listIcon} alt="icon-check" /></span> 
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="flex gap-4">
        <span><img src={listIcon} alt="icon-check" /></span> 
          <p>And much more!</p>
        </div>
      </section>
    </div>
  )
}
