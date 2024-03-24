import Link from "next/link";

const Sidebar = () => (
    <div id="sidebarinjs">

      <nav id='sidebarnav'>
        <Link class="sidebarcontent" href="/Projectdetail">Project Detail</Link>
        <Link class="sidebarcontent" href="/Developmentdetails">Development Detail</Link>
        <Link class="sidebarcontent" href="/Addprofessionals">Add Professional</Link>
        <Link class="sidebarcontent" href="/Uploaddocs">Upload documents</Link>
        <Link class="sidebarcontent" href="/Blockentry">Block Entry</Link>
        <Link class="sidebarcontent" href="/Assignpro">Assign Professionals</Link>
        <Link class="sidebarcontent" href="/Certification">Certification</Link>
        <Link class="sidebarcontent" href="/Payment">Payment page</Link>
      </nav>
    </div>
  );



  export default Sidebar;