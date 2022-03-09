
function FooterBtn({footer, active, Completed}) {

    return (
        <>
        <div className="footer__wrap">
        <p className="foter-text">items left</p>
        <div className="buttons__flex">
        <button className="footer__btn footer__btn-all">{footer}</button>
        <button className="footer__btn footer__btn-com">{active}</button>
        <button className="footer__btn footer__btn-uncom">{Completed}</button>
        </div>
        <button className="btn__clear">Clear completed</button>
        </div>
        </>
    )
}
export default FooterBtn;