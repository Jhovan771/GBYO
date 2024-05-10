import React from "react";

const About = () => {
  return (
    <div id='About' className='mt-24 px-8 mx-auto'>
      <h1 className='font-serif text-4xl font-bold border-b-4 w-52 pl-4 text-slate-800'>
        About
      </h1>
      <div className='mt-7 mx-auto'>
        <h3 className='p-11 font-serif text-xl lg:indent-8 text-wrap text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          voluptates. Dolorem consequuntur explicabo illo, commodi aperiam,
          aliquam delectus est nam rerum voluptatum, laudantium laborum quos
          nobis sed provident dolore. Pariatur molestiae magnam quaerat soluta
          impedit eius provident tempora sed quo asperiores. Mollitia numquam
          quibusdam repellat suscipit? Nam, nisi. Error fugit ullam aliquam
          temporibus inventore nihil enim itaque corrupti illum nostrum tempore
          blanditiis accusamus eius voluptates perspiciatis magni quod
          asperiores suscipit atque in nobis quidem sequi, odio quos!
          Voluptatibus, officia consequuntur!
        </h3>
      </div>
      <div className='grid lg:grid-cols-2 gap-4 p-7 m-auto md:grid-cols-1'>
        <div className=' p-4 bg-slate-100'>
          <div className='font-serif text-2xl text-center border-b-4 border-slate-300 font-bold'>
            Mission
          </div>
          <div className='text-center font-serif pt-6 text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            reiciendis officiis soluta porro, magnam excepturi aspernatur, velit
            animi sed tenetur consequuntur maiores voluptates? Eius, voluptates
            dolores quaerat dolor commodi exercitationem officia obcaecati
            inventore rem nostrum architecto dolore dolorum maxime alias,
            aperiam omnis nam distinctio porro doloribus. Recusandae, amet.
            Atque, dolore?
          </div>
        </div>
        <div className=' p-4 bg-slate-100'>
          <div className='font-serif text-2xl text-center border-b-4 border-slate-300 font-bold'>
            Vision
          </div>
          <div className='text-center font-serif pt-6 text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            reiciendis officiis soluta porro, magnam excepturi aspernatur, velit
            animi sed tenetur consequuntur maiores voluptates? Eius, voluptates
            dolores quaerat dolor commodi exercitationem officia obcaecati
            inventore rem nostrum architecto dolore dolorum maxime alias,
            aperiam omnis nam distinctio porro doloribus. Recusandae, amet.
            Atque, dolore?
          </div>
        </div>
      </div>
      {/* <div className='text-center font-bold text-4xl font-serif italic underline animate-pulse'>
        OPEN FOR SUGGESTIONS!!!
      </div> */}
    </div>
  );
};

export default About;
