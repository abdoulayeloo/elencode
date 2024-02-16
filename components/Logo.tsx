import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  return (
    <div>
      <div>
        <Image src={"logo.svg"} alt={"logo"} width={60} height={60} />
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Logo;
