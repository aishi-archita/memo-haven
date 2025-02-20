import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getUserState, logout, reset } from "../../redux/slice/userSlice";
import {
  DynamicModal,
  DynamicContentModal,
  DynamicSearchBar,
  CreateTag,
} from "../../components";
import AuthorizedMenu from "./AuthorizedMenu";
import "./index.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openAddTagModal, setOpenAddTagModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { user, userProfile } = useSelector(getUserState);

  const handleMenuClose = () => setShowMenu(false);
  const handleMenuShow = () => setShowMenu(true);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    toast.success("Logout successful", { toastId: "logout-success" });
    setOpenConfirmModal(false);
  };

  const closeConfirmModal = () => {
    setOpenConfirmModal(false);
  };

  const onViewProfileClicked = () => {
    setShowMenu(false);
    navigate("/me");
  };

  const onLogoutClicked = () => {
    setShowMenu(false);
    setOpenConfirmModal(true);
  };

  const onArchiveClicked = () => {
    handleMenuClose();
    navigate("/archive");
  };

  const onAllNotesClicked = () => {
    handleMenuClose();
    navigate("/home");
  };

  const onManageClicked = () => {
    handleMenuClose();
    navigate("/tags");
  };

  const onAddClicked = () => {
    setShowMenu(false);
    setOpenAddTagModal(true);
  };

  const onAboutClicked = () => {
    setShowMenu(false);
    navigate("/about");
  };

  const HeaderLogo = () => {
    return (
      <Link to="/home" className="header-logo">
        <h4>
          &#9997; memo
          <small className="text-muted"> Haven </small>
        </h4>
      </Link>
    );
  };

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <HeaderLogo />
          </Navbar.Brand>
          <Navbar.Toggle />
          {location.pathname === "/home" && <DynamicSearchBar type="notes" />}
          {location.pathname === "/tags" && <DynamicSearchBar type="tags" />}

          <Navbar.Collapse className="justify-content-end">
            {user && (
              <AuthorizedMenu
                showMenu={showMenu}
                handleMenuShow={handleMenuShow}
                handleMenuClose={handleMenuClose}
                user={
                  userProfile?.firstName && userProfile?.email
                    ? userProfile
                    : user
                }
                onViewProfileClicked={onViewProfileClicked}
                onAllNotesClicked={onAllNotesClicked}
                onArchiveClicked={onArchiveClicked}
                onAddClicked={onAddClicked}
                onManageClicked={onManageClicked}
                onLogoutClicked={onLogoutClicked}
                onAboutClicked={onAboutClicked}
              />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <DynamicModal
        show={openConfirmModal}
        handleClose={closeConfirmModal}
        primaryButtonAction={onLogout}
        primaryButtonText="Yes, Log me out"
        title="Caution!"
        bodyMessage="Are you sure you want to logout?"
        secondaryButtonText="Close"
      />
      <DynamicContentModal
        show={openAddTagModal}
        handleClose={() => setOpenAddTagModal(false)}
        title="Add a new Tag"
        children={<CreateTag closeModal={() => setOpenAddTagModal(false)} />}
      />
    </div>
  );
}

export default Header;
