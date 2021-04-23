import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IMGProfile } from '../../assets';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Account() {
    return (
        <Menu as='div' className='relative inline-block text-left pl-3'>
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className='flex items-center focus:outline-none'>
                            <img
                                src={IMGProfile}
                                width={25}
                                className='mr-2 border-2 rounded-full'
                                alt='Profile Pict'
                            />
                            <span className='text-sm text-gray-400 font-semibold'>
                                RevDonz
                            </span>
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <Menu.Items
                            static
                            className='origin-top-right absolute right-0 mt-2 w-56 divide-y rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                        >
                            <div className='py-1 px-1'>
                                <Menu.Item>
                                    {({ active }) => (
                                        <span className={classNames(active ? 'bg-teal-400 text-white' : 'text-gray-700', 'block rounded-md px-4 py-2 text-sm' )} >
                                            Toko Saya
                                        </span>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className='py-1 px-1'>
                                <Menu.Item>
                                    {({ active }) => (
                                        <span className={classNames(active ? 'bg-teal-400 text-white' : 'text-gray-700', 'block rounded-md px-4 py-2 text-sm' )} >
                                            Profile
                                        </span>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <span className={classNames(active ? 'bg-teal-400 text-white' : 'text-gray-700', 'block rounded-md px-4 py-2 text-sm' )} >
                                            Pesanan
                                        </span>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <span className={classNames(active ? 'bg-teal-400 text-white' : 'text-gray-700', 'block rounded-md px-4 py-2 text-sm' )} >
                                            Sign Out
                                        </span>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}
