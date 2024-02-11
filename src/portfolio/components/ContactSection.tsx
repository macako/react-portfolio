import Image from 'react-bootstrap/Image';
import { Contact } from '../reducer/interfaces';
import { getEnvVariables } from '../../helpers/getEnvVariables';

const { STORAGE_URL } = getEnvVariables();

interface Props {
  contact: Contact;
}

export const ContactSection = ({ contact }: Props) => {
  const { fullName, role } = contact;

  return (
    <section>
      <Image
        className='rounded-5 mb-4'
        src={`${STORAGE_URL}/hector-olea.jpg`}
        width='150'
        height='150'
        alt={fullName}
      />
      <h1 className='fw-bold'>{fullName}</h1>
      <h2 className='mb-4'>{role}</h2>
    </section>
  );
};
