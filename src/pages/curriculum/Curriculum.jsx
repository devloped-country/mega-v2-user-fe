import { useState } from "react";

function Curriculum({titleSubject, }) {
  const [showDetailSubject, setShowDetailSubject] = useState(false);

  return(
    <div>
      <ul onClick={() => {setShowDetailSubject}}>
        {titleSubject}
        
      </ul>
    </div>
  );
}

export default Curriculum;