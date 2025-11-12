import logo from "../assets/media/logo.svg";

export const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b">
        <div>
          <img alt="logo" className="h-8 md:h-9" src={logo} />
          <p className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <img
                className="w-5 h-5"
                alt="facebook"
                src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.9997%201.66602H12.4997C11.3946%201.66602%2010.3348%202.105%209.5534%202.8864C8.77199%203.66781%208.33301%204.72761%208.33301%205.83268V8.33268H5.83301V11.666H8.33301V18.3327H11.6663V11.666H14.1663L14.9997%208.33268H11.6663V5.83268C11.6663%205.61167%2011.7541%205.39971%2011.9104%205.24343C12.0667%205.08715%2012.2787%204.99935%2012.4997%204.99935H14.9997V1.66602Z'%20stroke='%2364748B'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
              />
            </a>
            <a href="#">
              <img
                className="w-5 h-5"
                alt="instagram"
                src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.167%201.66602H5.83366C3.53247%201.66602%201.66699%203.5315%201.66699%205.83268V14.166C1.66699%2016.4672%203.53247%2018.3327%205.83366%2018.3327H14.167C16.4682%2018.3327%2018.3337%2016.4672%2018.3337%2014.166V5.83268C18.3337%203.5315%2016.4682%201.66602%2014.167%201.66602Z'%20stroke='%2364748B'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.3337%209.47525C13.4366%2010.1688%2013.3181%2010.8771%2012.9952%2011.4994C12.6723%2012.1218%2012.1614%2012.6264%2011.5351%2012.9416C10.9088%2013.2569%2010.1991%2013.3666%209.5069%2013.2552C8.81468%2013.1438%208.17521%2012.817%207.67944%2012.3212C7.18367%2011.8255%206.85685%2011.186%206.74546%2010.4938C6.63408%209.80154%206.74379%209.09183%207.05901%208.46556C7.37423%207.8393%207.8789%207.32837%208.50123%207.00545C9.12356%206.68254%209.83187%206.56407%2010.5254%206.66692C11.2328%206.77182%2011.8878%207.10147%2012.3935%207.60717C12.8992%208.11288%2013.2288%208.76782%2013.3337%209.47525Z'%20stroke='%2364748B'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.583%205.41602H14.5913'%20stroke='%2364748B'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
              />
            </a>
            <a href="#">
              <img
                className="w-5 h-5"
                alt="twitter"
                src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.3337%203.3327C18.3337%203.3327%2017.7503%205.0827%2016.667%206.16603C18.0003%2014.4994%208.83366%2020.5827%201.66699%2015.8327C3.50033%2015.916%205.33366%2015.3327%206.66699%2014.166C2.50033%2012.916%200.416992%207.99937%202.50033%204.16603C4.33366%206.3327%207.16699%207.5827%2010.0003%207.49937C9.25033%203.99937%2013.3337%201.99937%2015.8337%204.3327C16.7503%204.3327%2018.3337%203.3327%2018.3337%203.3327Z'%20stroke='%2364748B'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
              />
            </a>
            <a href="#">
              <img
                className="w-5 h-5"
                alt="email"
                src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.667%203.33398H3.33366C2.41318%203.33398%201.66699%204.08018%201.66699%205.00065V15.0007C1.66699%2015.9211%202.41318%2016.6673%203.33366%2016.6673H16.667C17.5875%2016.6673%2018.3337%2015.9211%2018.3337%2015.0007V5.00065C18.3337%204.08018%2017.5875%203.33398%2016.667%203.33398Z'%20stroke='%2364748B'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.3337%205.83398L10.8587%2010.584C10.6014%2010.7452%2010.3039%2010.8307%2010.0003%2010.8307C9.69673%2010.8307%209.39927%2010.7452%209.14199%2010.584L1.66699%205.83398'%20stroke='%2364748B'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-1/2 gap-8">
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Quick Links
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Browse Cars</a>
              </li>
              <li>
                <a href="#">List Your Car</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Resources
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Insurance</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Contact
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li>+1 234 567890</li>
              <li>info@example.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© 2025 Brand. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
