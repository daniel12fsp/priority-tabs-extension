import styled, { keyframes } from "styled-components";
import { ITab } from "../interface/Tab.interface";
import { Loading } from "./Loading";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
  align-items: space-around;
`;

export function CompactList({ children }) {
  return <Ul>{children}</Ul>;
}

const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
  flex-shrink: 0;
  &:hover {
    background-color: #443355;
  }
  height: 80px;
  width: 80px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
  margin: 0 10px;

  &:hover {
    background-color: #443355;
  }
  position: relative;
  flex-direction: column;
`;

const breatheAnimation = keyframes`
  from {background-color: rgb(0, 221, 255);}
  to {background-color: #443355;}
`;

const NotificationIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgb(0, 221, 255);
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  padding: 5px;
`;

const Hostname = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Label = styled.div`
  font-size: 10px;
`;

interface CompactListItemProps {
  icon: string;
  label: string;
  notification: boolean;
  onClick: () => void;
  title: string;
  status: ITab["status"];
  hostname: string;
}

export function CompactListItem({
  icon,
  title,
  onClick,
  notification,
  label,
  status,
  hostname,
}: CompactListItemProps) {
  if (status === "loading") {
    return (
      <ListItemContainer onClick={onClick} title={title}>
        <Loading />
        <Hostname>{hostname}</Hostname>
      </ListItemContainer>
    );
  }

  return (
    <ListItemContainer onClick={onClick} title={title}>
      <ImageContainer>
        <Icon src={icon} />
        {notification && <NotificationIcon />}
        {label && <Label> {label}</Label>}
      </ImageContainer>
    </ListItemContainer>
  );
}
