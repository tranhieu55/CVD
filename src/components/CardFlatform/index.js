import React from "react"
import Image02 from "../../images/magentocopy.png"
import Image03 from "../../images/bigo2.png"
import { theme } from "../../utils/theme"
import ButtonCustom from "../ButtonCustom"
import P from "../../components/bits/Typography"

export default function CardFlatform() {
  return (
    <>
      <div className="col-md-4">
        <img alt="" src={Image02} />
        <P pdb="30">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </P>
        <ButtonCustom
          wt="184"
          ht="48"
          fz="16"
          lineh="48"
          bgColor={theme.colors.transparent}
        >
          Learn more
        </ButtonCustom>
      </div>
      <div className="col-md-4">
        <img
          alt=""
          src="https://www.convertdigital.com.au/wp-content/uploads/2015/12/bigcommerce_partner_hp_v02.png"
        />
        <P pdb="30">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </P>
        <ButtonCustom
          wt="184"
          ht="48"
          fz="16"
          lineh="48"
          bgColor={theme.colors.transparent}
        >
          Learn more
        </ButtonCustom>
      </div>
      <div className="col-md-4">
        <img alt="" src={Image03} />
        <P pdb="30">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </P>
        <ButtonCustom
          wt="184"
          ht="48"
          fz="16"
          lineh="48"
          bgColor={theme.colors.transparent}
        >
          Learn more
        </ButtonCustom>
      </div>
    </>
  )
}
