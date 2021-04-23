import React, { Component } from 'react'
import { IMGProfile } from '../../assets'
import { Account } from '../index'

export default class Navbar extends Component {
    render() {
        return (
            <div className="">
                <div className="container px-5 lg:px-20 py-3 flex justify-between items-center shadow">
                    <div className="px-8 py-2 rounded-md bg-teal-400">
                        <span className="text-white text-lg">TokoKita</span>
                    </div>
                    {/* <Menu as="div" className="flex items-center justify-between relative">
                        <Menu.Button className="flex items-center focus:outline-none">
                            <img src={IMGProfile} width={25} className="mr-2 border-2 rounded-full" alt="Profile Pict"/>
                            <span className="text-sm text-gray-400 font-semibold">RevDonz</span>
                        </Menu.Button>
                        
                        <Menu.Items>
                            <Menu.Item>
                                <a href="">anu</a>
                            </Menu.Item>
                        </Menu.Items>
                    </Menu> */}
                    <Account />
                </div>
            </div>
        )
    }
}
