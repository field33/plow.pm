import { FC } from 'react'
import {PlowLogo} from "@components/PlowLogo";
import Link from "next/link";

export const Footer: FC = () => {
  return (
      <footer
          className={`
                bottom-0 p-2 pt-24 pb-16 
                flex flex-col md:flex-row gap-16 justify-center items-start 
                bg-f33-orange-500 text-f33-gray-800`}
      >
        <div className="flex flex-col gap-10">
          <PlowLogo />
          <span>Copyright 2023 © Field 33 All rights reserved.</span>
        </div>
        <div className="flex flex-col gap-10">
          <span className="min-w-0 block text-lg break-normal whitespace-normal">FIELD 33</span>
          <div className="flex flex-col gap-2">
            <Link
                href="https://registry.field33.com"
            >
              Plow Registry
            </Link>
            <Link
                href="https://field33.com"
            >
              Field33.com
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <span className="min-w-0 block text-lg break-normal whitespace-normal">RESOURCES</span>
          <div className="flex flex-col gap-2">
            <a href="https://medium.com/field33" target="_blank">
              medium.com
            </a>
            <a href="https://github.com/field33" target="_blank">
              Our Github
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <label className="min-w-0 block text-lg break-normal whitespace-normal">LEGAL</label>
          <div className="flex flex-col gap-2">
            <a href="https://field33.com/imprint" target="_blank">
              Imprint
            </a>
            <a href="https://field33.com/terms" target="_blank">
              Terms of use
            </a>
            <a href="https://field33.com/privacy" target="_blank">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
  )
}
