import React from 'react';
import { styled } from '@material-ui/core/styles';

function Project(props) {
  const {
    project: { name, deploy_url, github_url, description, image, image_alt },
    reversed,
  } = props;

  const ProjectContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    background: '#3f51b5',
    boxShadow: '0 0.2rem 0.3rem black',
    padding: '1rem',
    marginBottom: '1rem',
    flexDirection: reversed ? 'row-reverse' : 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

  return (
    <ProjectContainer>
      <InfoContainer>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Links>
          <ViewLive href={deploy_url} target="_blank" rel="noopener noreferrer">
            <span>See it live</span>
          </ViewLive>
          <ViewGitHub
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View on GitHub</span>
          </ViewGitHub>
        </Links>
      </InfoContainer>
      <Image src={image} alt={image_alt} />
    </ProjectContainer>
  );
}

const InfoContainer = styled('div')(({ theme }) => ({
  width: '40%',
  paddingRight: '1rem',
  textShadow: '0 0.1rem 0.3rem black',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    width: '100%',
    paddingRight: '0',
    marginBottom: '0.5rem',
  },
}));
const Image = styled('img')(({ theme }) => ({
  width: '40%',
  height: 'auto',
  objectFit: 'contain',
  [theme.breakpoints.down('sm')]: {
    width: '75%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
}));
const Title = styled('h3')(({ theme }) => ({
  fontSize: '2rem',
  color: '#FFFFFF',
  [theme.breakpoints.down('xs')]: {
    marginBottom: '0',
  }
}));
const Description = styled('p')({
  color: '#DDDDDD',
  fontSize: '1.2rem',
});
const Links = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: '1rem',
  textShadow: 'none',
  fontWeight: '600',
});
const ViewLive = styled('a')({
  padding: '0.25rem 0.5rem',
  backgroundColor: '#CCCCCC',
  borderRadius: '0.2rem',
  color: '#0C0C0C',
  textDecoration: 'none',
  boxShadow: '0 0.1rem 0 black',
  '&&:hover': {
    backgroundColor: '#AAAAAA',
  },
});
const ViewGitHub = styled('a')({
  padding: '0.25rem 0.5rem',
  backgroundColor: 'rgb(48, 161, 78);',
  borderRadius: '0.2rem',
  color: '#FFFFFF',
  textDecoration: 'none',
  boxShadow: '0 0.1rem 0 black',
  marginLeft: '1rem',
  '&&:hover': {
    backgroundColor: 'rgb(28, 141, 58)',
  },
});
export default Project;
