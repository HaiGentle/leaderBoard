import './index.scss'

const ListBoard = (props) => {
    const { list } = props;
    return (
        <div className="board-info">
            <div className="board-info__title">
                <div className="board-info__rank board-info--border-space">#</div>
                <div className="board-info__name board-info--border-space">Name</div>
                <div className="board-info__score board-info--border-space">Score</div>
            </div>
            {
                list?.map((item, i) => (
                    <div key={i} className="board-info__list">
                        <div className="board-info__rank board-info--border-space">{i+1}</div>
                        <div className="board-info__name board-info--border-space">{item.name}</div>
                        <div className="board-info__score board-info--border-space">{item.score}</div>
                    </div>
                ))
            }

        </div>
    )
}

export default ListBoard