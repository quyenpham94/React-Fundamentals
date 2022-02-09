function App() {
    return (
        <div>
            <Tweet 
                name="Quyen Pham"
                username="quyenpham"
                date={new Date().toDateString()}
                message="#Ilovehashtags"
            />
            <Tweet 
                name="Sang Pham"
                username="sangpham"
                date={new Date().toDateString()}
                message="Follow me"
            />
            <Tweet 
                name="Tuan Nguyen"
                username="tuannguyen"
                date={new Date().toDateString()}
                message="Love Asian Foods"
            />
        </div>
       
    );
};