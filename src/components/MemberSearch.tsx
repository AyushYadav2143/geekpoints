
import React, { useState } from 'react';
import { useGlobal } from '@/contexts/GlobalContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { toast } from 'sonner';

interface MemberSearchProps {
  onMemberFound: (memberId: string) => void;
}

const MemberSearch: React.FC<MemberSearchProps> = ({ onMemberFound }) => {
  const [searchInput, setSearchInput] = useState('');
  const { searchMember } = useGlobal();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchInput.trim()) {
      toast.error("Please enter a registration number");
      return;
    }
    
    const foundMember = searchMember(searchInput.trim());
    
    if (foundMember) {
      onMemberFound(foundMember.id);
      toast.success(`Found ${foundMember.name}`);
    } else {
      toast.error("Member not found. Please check the registration number");
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-lg mx-auto mb-8">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-5 w-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Enter Registration Number"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-10 pr-20 h-12 text-base rounded-l-lg rounded-r-none border-r-0"
        />
        <Button 
          type="submit" 
          className="h-12 px-6 rounded-l-none bg-purple-600 hover:bg-purple-700"
        >
          Find
        </Button>
      </div>
    </form>
  );
};

export default MemberSearch;
