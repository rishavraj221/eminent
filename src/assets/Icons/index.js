import React from "react"

import Account from "./account"
import Address from "./address"
import ArrowLeft from "./arrowLeft"
import ArrowRight from "./arrowRight"
import CLArr from "./carouselLeftArrow"
import CRArr from "./carouselRightArrow"
import Comment from "./comment"
import Cross from "./cross"
import Dash from "./dash"
import DropDown from "./dropDown"
import Email from "./email"
import Facebook from "./facebook"
import Filter from "./filter"
import Houzz from "./houzz"
import IconNotFound from "./iconNotFound"
import Instagram from "./instagram"
import Logo from "./logo"
import LogoLight from "./logoLight"
import Menu from "./menu"
import OSBtn from "./ourServicesButton"
import Phone from "./phone"
import Quote from "./quote"
import Search from "./search"
import SliderL from "./sliderLeft"
import SliderR from "./sliderRight"
import Sorting from "./sorting"

function Icon({ name, color, size, width = "44" }) {
  // width is optional for the dash icon

  const argName = name.toLowerCase()

  if (argName === "account") return <Account color={color} size={size} />
  if (argName === "address") return <Address color={color} size={size} />
  if (argName === "arrowleft") return <ArrowLeft color={color} size={size} />
  if (argName === "arrowright") return <ArrowRight color={color} size={size} />
  if (argName === "carleftarrow") return <CLArr color={color} size={size} />
  if (argName === "carrightarrow") return <CRArr color={color} size={size} />
  if (argName === "comment") return <Comment color={color} size={size} />
  if (argName === "cross") return <Cross color={color} size={size} />
  if (argName === "dash") return <Dash color={color} width={width} />
  if (argName === "dropdown") return <DropDown color={color} width={width} />
  if (argName === "email") return <Email color={color} size={size} />
  if (argName === "facebook") return <Facebook color={color} size={size} />
  if (argName === "filter") return <Filter color={color} size={size} />
  if (argName === "houzz") return <Houzz color={color} size={size} />
  if (argName === "instagram") return <Instagram color={color} size={size} />
  if (argName === "logo") return <Logo size={size} />
  if (argName === "logolight") return <LogoLight size={size} />
  if (argName === "menu") return <Menu color={color} size={size} />
  if (argName === "ourservicesbtn") return <OSBtn color={color} size={size} />
  if (argName === "phone") return <Phone color={color} size={size} />
  if (argName === "quote") return <Quote color={color} size={size} />
  if (argName === "search") return <Search color={color} size={size} />
  if (argName === "sliderleft") return <SliderL color={color} size={size} />
  if (argName === "sliderright") return <SliderR color={color} size={size} />
  if (argName === "sorting") return <Sorting color={color} size={size} />
  return <IconNotFound />
}

export default Icon
