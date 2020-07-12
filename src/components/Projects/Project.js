import React from 'react';
import { styled } from '@material-ui/core/styles';

function Project(props) {
  const {
    project: { name, deploy_url, github_url, description, image, image_alt },
  } = props;
  return (
    <ProjectContainer>
      <InfoContainer>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <ViewLive href={deploy_url} target="_blank" rel="noopener noreferrer">
          <span>See it live</span>
        </ViewLive>
      </InfoContainer>
      <Image src={image} alt={image_alt} />
    </ProjectContainer>
  );
}

const ProjectContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  background: '#3f51b5',
  boxShadow: '0 0.2rem 0.3rem black',
  padding: '1rem',
});

const InfoContainer = styled('div')({
  width: '40%',
  paddingRight: '1rem',
  textShadow: '0 0.1rem 0 black',
});
const Image = styled('img')({
  width: '40%',
  height: 'auto',
});
const Title = styled('h3')({
  fontSize: '2rem',
  color: '#FFFFFF',
});
const Description = styled('p')({
  color: '#DDDDDD',
});
const ViewLive = styled('a')({
  padding: '0.25rem 0.5rem',
  backgroundColor: '#CCCCCC',
  borderRadius: '0.2rem',
  color: '#0C0C0C',
  textDecoration: 'none',
  fontSize: '1rem',
  textShadow: 'none',
  fontWeight: '6`00',
  boxShadow: '0 0.1rem 0 black',
});
export default Project;
