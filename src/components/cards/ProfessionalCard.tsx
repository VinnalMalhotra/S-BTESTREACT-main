import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { CheckIcon, PhoneIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Image } from "@yext/pages-components";
import { CardProps } from "@yext/search-ui-react";
import { useState } from "react"; 
import { useLocationsContext } from "../../common/LocationsContext";
import HealthcareProfessional from "../../types/healthcare_professionals";
import AppointmentForm from "../AppointmentForm";
import HoursText from "../HoursText";

const ProfessionalCard = ({ result }: CardProps<any>) => {
  let [isOpen, setIsOpen] = useState(false);
 
  const { name } = result;
  const {
    headshot,
    c_specialty,
    mainPhone,
    hours,
    landingPageUrl,
    c_acceptingPatientsAges03,
    acceptingNewPatients,
    npi,
    timezone,
    c_photo
  } = result.rawData;
 

  return (
    <div
      className={`border rounded-lg ${isOpen ? `opacity-80` : `opacity-100`}`}
    >
      <div className={`relative flex flex-col`}>
        <a
          href={landingPageUrl}
          className="group aspect-square block w-full overflow-hidden rounded-t-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 bottom-12"
        >
          {c_photo && (
            <Image
              image={c_photo}
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
          )}
        </a>
        <a
          href={landingPageUrl}
          className="text-primary text-lg font-bold px-2 mt-4"
        >
          {name}
        </a>
        
      </div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-7xl rounded-xl bg-white/5 p-6  ">
                  <AppointmentForm
                    professionalName={name!}
                    onClose={() => setIsOpen(false)}
                  ></AppointmentForm>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProfessionalCard;
